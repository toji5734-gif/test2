export type Product = { id: string; slug: string; name: string; description: string; price: number; image: string; category: string; brand?: string; sku?: string; stock?: number; specifications?: Record<string, string> }

export const categories = ['CPUs','GPUs','Motherboards','RAM','SSDs','HDDs','PC Cases','Power Supplies','CPU Cooling','Case Cooling','Monitors','Keyboards','Mice','Headsets','Cables','Adapters','Accessories','Pre-built PCs','Other']

export const products: Product[] = [
  { id:'placeholder-01', slug:'product-placeholder-01', name:'PRODUCT PLACEHOLDER 01', description:'Development test product for catalogue and cart setup.', price:1, image:'/placeholder.svg', category:'Accessories', sku:'DEV-001', stock:10, specifications:{Status:'Development placeholder',Use:'Cart arithmetic test'} },
  { id:'placeholder-02', slug:'product-placeholder-02', name:'PRODUCT PLACEHOLDER 02', description:'Development test product for catalogue and cart setup.', price:2, image:'/placeholder.svg', category:'Cables', sku:'DEV-002', stock:10, specifications:{Status:'Development placeholder',Use:'Cart arithmetic test'} },
  { id:'placeholder-03', slug:'product-placeholder-03', name:'PRODUCT PLACEHOLDER 03', description:'Development test product for catalogue and cart setup.', price:5, image:'/placeholder.svg', category:'Other', sku:'DEV-003', stock:10, specifications:{Status:'Development placeholder',Use:'Cart arithmetic test'} },
]

export const formatCurrency = (value: number) => new Intl.NumberFormat('en-GB',{style:'currency',currency:'GBP'}).format(value)
export const getProduct = (slug: string) => products.find((product) => product.slug === slug)
export const TEST_PRODUCTS_ENABLED = true

export type CartItem = { productId: string; quantity: number }
export const getCartProduct = (id: string) => products.find((product) => product.id === id)
export const cartSubtotal = (items: CartItem[]) => items.reduce((sum,item) => sum + (getCartProduct(item.productId)?.price ?? 0) * item.quantity, 0)
export const cartCount = (items: CartItem[]) => items.reduce((sum,item) => sum + item.quantity, 0)

export type BuilderComponent = { id:string; name:string; category:string; price:number; description:string; image:string }
export const builderCategories = ['PC Case','CPU','Graphics Card','Motherboard','RAM','Storage','Power Supply','Cooling','Operating System']
export const builderComponents: BuilderComponent[] = builderCategories.flatMap((category, categoryIndex) => [1,2,3].map((n) => ({ id:`${category.toLowerCase().replaceAll(' ','-')}-${n}`, name:`${category.toUpperCase()} PLACEHOLDER 0${n}`, category, price:(categoryIndex+1)*50+n*25, description:'Development component placeholder — replace with verified catalogue data.', image:'/placeholder.svg' })))

export const site = { name:'PC Shack', address:['Witty Street','Hull','East Yorkshire','HU3 4TT','United Kingdom'], phone:'01482245000', displayPhone:'01482 245000', email:'info@pcshack.co.uk', customerEmail:'customerservices@pcshack.co.uk', socialLinks:{facebook:'',instagram:'',x:'',youtube:''} }
export const repairPricing = { desktop:[['Health Check','From £35'],['Wipe / Reload','From £35'],['Save / Wipe / Reload','From £65'],['Booting Problems','From £35'],['Slowness Issues','From £35'],['Crashing Problems','From £35']], laptop:[['Health Check & Clean','£35'],['Wipe & Reload','£35'],['Wipe, Reload & Data Restore','£65'],['Broken Screen','From £85'],['Battery Replacement','Free Quotation'],['Keyboard / Hardware Replacement','Free Quotation']] }
export const services = [{title:'PC Repairs',description:'Diagnostics, troubleshooting, repairs and upgrades.',href:'/repairs'},{title:'Laptop Repairs',description:'Hardware and software repair services.',href:'/repairs'},{title:'Mac Repairs',description:'Mac diagnostics and repair services.',href:'/repairs'},{title:'Custom PCs',description:'PC building and component selection.',href:'/custom-pcs'},{title:'Networking',description:'Home and business networking support.',href:'/contact'},{title:'IT Support',description:'Professional IT assistance through our team.',href:'/contact'}]

export const breadcrumbs = (items:{label:string;href?:string}[]) => items
