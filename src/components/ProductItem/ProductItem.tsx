import Button from "../Button/Button"
import './ProductItem.css'

export type Product = {
    id: string
    title: string
    price: number
    description: string
}

interface ProductItemProps {
    product: Product
    className?: string
    onAdd: (val: Product) => void
}

const ProductItem = ({ product, className, onAdd }: ProductItemProps) => {

    const onAddHandler = () => {
        onAdd(product)
    }

    return (
        <div className={'product ' + className}>
            <div className="img" />
            <div className="title">{product.title}</div>
            <div className="description">{product.description}</div>
            <div className="price">
                <span>Стоимость: <b>{product.price}</b></span>
            </div>
            <Button className="add-btn" onClick={onAddHandler}>
                добавить в корзину
            </Button>
        </div>
    )
}

export default ProductItem