import path from 'node:path'
import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import type { IncomingMessage, ServerResponse } from 'node:http'
import type { Connect, Plugin } from 'vite'
import { defineConfig } from 'vitest/config'

const rootDir = path.dirname(fileURLToPath(import.meta.url))

function sendJson(
  res: ServerResponse,
  status: number,
  payload: { ok: boolean; error?: string },
) {
  res.statusCode = status
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.end(JSON.stringify(payload))
}

function readBody(req: IncomingMessage): Promise<string> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = []
    req.on('data', (chunk: Buffer | string) => {
      chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk)
    })
    req.on('end', () => {
      resolve(Buffer.concat(chunks).toString('utf8'))
    })
    req.on('error', reject)
  })
}

// Dev stand-in for public/api/contact.php. Apache runs the PHP file in production.
async function handleContact(req: IncomingMessage, res: ServerResponse) {
  if (req.method === 'OPTIONS') {
    res.statusCode = 204
    res.setHeader('Allow', 'POST, OPTIONS')
    res.end()
    return
  }

  if (req.method !== 'POST') {
    sendJson(res, 405, { ok: false, error: 'Method not allowed' })
    return
  }

  try {
    const data: unknown = JSON.parse(await readBody(req))
    if (!data || typeof data !== 'object') {
      sendJson(res, 400, { ok: false, error: 'Invalid request' })
      return
    }

    const body = data as Record<string, unknown>
    if (
      typeof body.companyWebsite === 'string' &&
      body.companyWebsite.trim() !== ''
    ) {
      sendJson(res, 200, { ok: true })
      return
    }

    const name = typeof body.name === 'string' ? body.name.trim() : ''
    const email = typeof body.email === 'string' ? body.email.trim() : ''
    const message = typeof body.message === 'string' ? body.message.trim() : ''
    if (!name || !email || !message) {
      sendJson(res, 422, {
        ok: false,
        error: 'Please check the form and try again.',
      })
      return
    }

    await new Promise((resolve) => {
      setTimeout(resolve, 400)
    })
    sendJson(res, 200, { ok: true })
  } catch {
    sendJson(res, 400, { ok: false, error: 'Invalid request' })
  }
}

function contactApiMock(): Plugin {
  const middleware: Connect.NextHandleFunction = (req, res, next) => {
    const pathName = req.url?.split('?')[0]
    if (pathName !== '/api/contact.php') {
      next()
      return
    }
    void handleContact(req, res)
  }

  return {
    name: 'contact-api-mock',
    configureServer(server) {
      server.middlewares.use(middleware)
    },
    configurePreviewServer(server) {
      server.middlewares.use(middleware)
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), contactApiMock()],
  resolve: {
    alias: {
      '@': path.resolve(rootDir, 'src'),
    },
  },
  build: {
    sourcemap: false,
    chunkSizeWarningLimit: 800,
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: 'vendor',
              test: /node_modules/,
            },
          ],
        },
      },
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
})
