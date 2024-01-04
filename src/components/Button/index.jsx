import { Container } from "./styles"

export function Button({ title, loading = false, variant, ...rest }) {
  return (
    <Container type="button" disabled={loading} variant={variant} {...rest}>
      {loading ? "Carregando" : title}
    </Container>
  )
}
