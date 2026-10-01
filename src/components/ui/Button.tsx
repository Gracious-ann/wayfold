import type { ComponentProps } from 'react'

// Словник: назва варіанта → класи Tailwind.
const variantStyles = {
  primary: 'h-13 rounded-[14px] bg-primary px-7 text-[17px] font-extrabold text-primary-fg',
  dark: 'h-11 rounded-[10px] bg-fg px-5 text-[15px] font-bold text-bg',
  outline: 'h-10 rounded-full border-[1.5px] border-border bg-surface px-3.5 text-sm font-bold',
}

// keyof typeof variantStyles = 'primary' | 'dark' | 'outline' — береться прямо зі словника,
// тож коли додається новий варіант у словник, тип оновиться сам.
type ButtonProps = ComponentProps<'button'> & {
  variant?: keyof typeof variantStyles // «?» — необов'язковий, бо є значення за замовчуванням
}

export default function Button({
  variant = 'primary',
  type = 'button',
  className = '',
  children,
  ...rest // «усе інше»: onClick, disabled, aria-label…
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center gap-2 ${variantStyles[variant]} ${className}`}
      // {...rest} — «розсипає» решту пропсів на <button>: onClick={…}, disabled, aria-label…
      {...rest}
    >
      {children}
    </button>
  )
}
