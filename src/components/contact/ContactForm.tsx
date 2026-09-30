import { useState, type ReactNode } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { Check, LoaderCircle } from 'lucide-react'
import { useForm, type FieldErrors } from 'react-hook-form'
import { siteConfig } from '@/config/site'
import { categories } from '@/data/products'
import { WhatsAppButton } from '@/components/contact/WhatsAppButton'
import { Button } from '@/components/ui/Button'
import { contactSchema } from '@/lib/validation'
import type { ContactFormValues } from '@/types'

type ContactFormProps = {
  initialCategory: ContactFormValues['category']
  initialMessage: string
}

type FormStatus = 'idle' | 'success' | 'error'

const fieldOrder = [
  'name',
  'organisation',
  'role',
  'email',
  'phone',
  'category',
  'message',
] as const

const inputClass =
  'min-h-12 w-full rounded-full border border-sp-border bg-sp-tint px-5 py-3 text-[17px] text-sp-ink aria-invalid:border-sp-error focus:border-sp-teal'

export function ContactForm({
  initialCategory,
  initialMessage,
}: ContactFormProps) {
  const [status, setStatus] = useState<FormStatus>('idle')
  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      organisation: '',
      role: '',
      email: '',
      phone: '',
      category: initialCategory,
      message: initialMessage,
      companyWebsite: '',
    },
  })

  function onInvalid(formErrors: FieldErrors<ContactFormValues>) {
    const first = fieldOrder.find((field) => formErrors[field])
    if (first) setFocus(first)
  }

  async function onSubmit(values: ContactFormValues) {
    setStatus('idle')
    try {
      const response = await fetch('/api/contact.php', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })
      const payload: unknown = await response.json()
      const ok =
        response.ok &&
        typeof payload === 'object' &&
        payload !== null &&
        'ok' in payload &&
        payload.ok === true
      if (!ok) {
        setStatus('error')
        return
      }
      reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div
        role="status"
        className="border-brand-100 bg-brand-50 rounded-[28px] border p-7"
      >
        <span className="bg-accent-500 text-brand-800 flex size-13 items-center justify-center rounded-full">
          <Check className="size-7" />
        </span>
        <h2 className="text-brand-800 mt-5 text-2xl">
          Thank you, we will be in touch
        </h2>
        <p className="text-muted mt-2">
          Thank you. We will reply using the contact details you provided.
        </p>
        <div className="mt-6">
          <Button
            type="button"
            variant="secondary"
            onClick={() => setStatus('idle')}
          >
            Send another enquiry
          </Button>
        </div>
      </div>
    )
  }

  return (
    <form
      className="relative space-y-5"
      noValidate
      onSubmit={handleSubmit(onSubmit, onInvalid)}
    >
      {status === 'error' ? (
        <div
          role="alert"
          className="rounded-[20px] border border-[#B42318] bg-white p-4 text-[16px] text-[#B42318]"
        >
          <p>
            We could not send your enquiry. Please call us or send a WhatsApp
            message instead.
          </p>
          <p className="mt-2">
            <a
              className="text-brand-800 font-medium underline"
              href={`tel:${siteConfig.phoneTel}`}
            >
              {siteConfig.phoneDisplay}
            </a>
          </p>
          <div className="mt-3">
            <WhatsAppButton />
          </div>
        </div>
      ) : null}

      <Field id="name" label="Name" required error={errors.name?.message}>
        <input
          id="name"
          type="text"
          autoComplete="name"
          aria-required="true"
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? 'name-error' : undefined}
          className={inputClass}
          {...register('name')}
        />
      </Field>

      <Field
        id="organisation"
        label="Organisation"
        error={errors.organisation?.message}
      >
        <input
          id="organisation"
          type="text"
          autoComplete="organization"
          aria-invalid={errors.organisation ? true : undefined}
          aria-describedby={
            errors.organisation ? 'organisation-error' : undefined
          }
          className={inputClass}
          {...register('organisation')}
        />
      </Field>

      <Field id="role" label="Role" error={errors.role?.message}>
        <input
          id="role"
          type="text"
          autoComplete="organization-title"
          aria-invalid={errors.role ? true : undefined}
          aria-describedby={errors.role ? 'role-error' : undefined}
          className={inputClass}
          {...register('role')}
        />
      </Field>

      <Field id="email" label="Email" required error={errors.email?.message}>
        <input
          id="email"
          type="email"
          autoComplete="email"
          aria-required="true"
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className={inputClass}
          {...register('email')}
        />
      </Field>

      <Field id="phone" label="Phone" error={errors.phone?.message}>
        <input
          id="phone"
          type="tel"
          autoComplete="tel"
          aria-invalid={errors.phone ? true : undefined}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
          className={inputClass}
          {...register('phone')}
        />
      </Field>

      <Field
        id="category"
        label="Category of interest"
        error={errors.category?.message}
      >
        <select
          id="category"
          aria-invalid={errors.category ? true : undefined}
          aria-describedby={errors.category ? 'category-error' : undefined}
          className={inputClass}
          {...register('category')}
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category.slug} value={category.slug}>
              {category.name}
            </option>
          ))}
          <option value="other">Other</option>
        </select>
      </Field>

      <Field
        id="message"
        label="Message"
        required
        error={errors.message?.message}
      >
        <textarea
          id="message"
          rows={5}
          maxLength={2000}
          aria-required="true"
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={`${inputClass} min-h-35 rounded-[20px]`}
          {...register('message')}
        />
      </Field>

      <div
        className="absolute -left-[9999px] h-px w-px overflow-hidden"
        aria-hidden="true"
      >
        <label htmlFor="companyWebsite">Company website</label>
        <input
          id="companyWebsite"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register('companyWebsite')}
        />
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={isSubmitting}
        aria-busy={isSubmitting}
      >
        {isSubmitting ? (
          <LoaderCircle aria-hidden="true" className="size-4 animate-spin" />
        ) : null}
        {isSubmitting ? 'Sending enquiry' : 'Send enquiry'}
      </Button>
    </form>
  )
}

type FieldProps = {
  id: string
  label: string
  required?: boolean
  error?: string
  children: ReactNode
}

function Field({ id, label, required, error, children }: FieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="text-brand-900 block text-[16px] font-bold"
      >
        {label}
        {required ? (
          <>
            <span aria-hidden="true" className="text-accent-700">
              {' '}
              *
            </span>
            <span className="sr-only"> (required)</span>
          </>
        ) : null}
      </label>
      <div className="mt-1.5">{children}</div>
      {error ? (
        <p
          id={`${id}-error`}
          role="alert"
          className="mt-1.5 text-[15px] text-[#B42318]"
        >
          {error}
        </p>
      ) : null}
    </div>
  )
}
