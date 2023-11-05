export interface TypographyProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'small' | 'blockquote'
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'small' | 'blockquote' | 'lead' | 'muted'
  className?: string
  children: React.ReactNode
}
