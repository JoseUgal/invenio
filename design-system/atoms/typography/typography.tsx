import { type TypographyProps } from './types'
import { typographyVariants } from './variants'

const Typography = ({
  as = 'p',
  variant,
  className,
  children
}: TypographyProps) => {
  const Tag = as
  const selectedVariant = variant ?? as

  return (
    <Tag
      className={typographyVariants({ variant: selectedVariant, className })}
    >
      {children}
    </Tag>
  )
}

Typography.displayName = 'Typography'

export { Typography }
