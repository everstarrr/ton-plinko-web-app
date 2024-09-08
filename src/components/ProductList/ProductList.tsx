import { useState } from 'react'
import ProductItem, { Product } from '../ProductItem/ProductItem'
import './ProductList.css'
import { useTelegram } from '../../hooks/useTelegram'

const products = [
    { id: '1', title: 'jeans', price: 5000, description: 'blue rizz' },
    { id: '2', title: 'jacket', price: 5000, description: 'efesf rizz' },
    { id: '3', title: 'tshirt', price: 5000, description: 'fjeisj feisj' },
    { id: '4', title: 'hoodie', price: 5000, description: 'cihoa wiojdoa' },
    { id: '5', title: 'jeans 2', price: 5000, description: 'dieah coesuo' },
    { id: '6', title: 'sneakers', price: 5000, description: 'cksej ekano' },
    { id: '7', title: 'pidor', price: 5000, description: 'ndwkan kawa' },
    { id: '8', title: 'papich', price: 5000, description: 'ishi ekaawa' },
]

const getTotalPrice = (items: Product[]) => {
    return items.reduce((acc, item) => {
        return acc += item.price
    }, 0)
}

const ProductList = () => {
    const [addedItems, setAddedItems] = useState<Product[]>([])
    const { tg } = useTelegram()
    const onAdd = (product: Product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id)
        let newItems = []

        if (!!alreadyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id)
        } else {
            newItems = [...addedItems, product]
        }

        setAddedItems(newItems)

        if (newItems.length === 0) {
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
            tg.MainButton.setParams({
                text: `купить ${getTotalPrice(newItems)}`
            })
        }
    }
    return (
        <div className='list'>
            {products.map(item => (
                <ProductItem
                    product={item}
                    onAdd={onAdd}
                    className='item'
                />
            ))}
        </div>
    )
}

export default ProductList