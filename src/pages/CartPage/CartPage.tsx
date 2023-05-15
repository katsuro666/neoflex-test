import React from 'react'
import { PageContainer } from 'components'
import { Header, Footer, CartSection} from 'modules'

export function CartPage() {
  return (
    <PageContainer>
    <Header />
    <CartSection />
    <Footer />
    </PageContainer>
  )
}
