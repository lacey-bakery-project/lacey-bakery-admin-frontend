import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchProducts } from '../actions'
import Product from './Product'
import Input from './Input'

const initState = {
    cakes: false,
    cookies: false,
    cupcakes: false,
}

function Products(props) {
    const [sort, setSort] = useState(initState)
    const [filteredProducts, setFilteredProducts] = useState([])
    const filtered = []

    useEffect(() => {
        props.fetchProducts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        props.products.forEach(p => {
            if (sort.cakes === true && p.category_name === 'cakes') {
                filtered.push(p)
            }
            if (sort.cookies === true && p.category_name === 'cookies') {
                filtered.push(p)
            }
            if (sort.cupcakes === true && p.category_name === 'cupcakes') {
                filtered.push(p)
            }
            if (sort.cakes === false && sort.cookies === false && sort.cupcakes === false) {
                filtered.push(p)
            }
        })
        setFilteredProducts(filtered)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sort])

    const handleChange = e => {
        setSort({
            ...sort,
            [e.target.name]: e.target.checked
        })
    }

    const sortList = [
        {
            label: 'cake',
            name: 'cakes',
            type: 'checkbox',
            value: sort.cakes,
            change: handleChange
        },
        {
            label: 'cookie',
            name: 'cookies',
            type: 'checkbox',
            value: sort.cookies,
            change: handleChange
        },
        {
            label: 'cup cake',
            name: 'cupcakes',
            type: 'checkbox',
            value: sort.cupcakes,
            change: handleChange
        }
    ]

    console.log(filteredProducts)
    console.log("products renders")

    const mapFunc = array => {
        return array.map(product => {
            return (
                <Product
                    key={product.product_id}
                    product={product}
                />
            )
        })
    }

    return (
        <div>
            <div>
                <div>sort by category:</div>
                <div>
                    {sortList.map(item => <Input
                        label={item.label}
                        name={item.name}
                        type={item.type}
                        value={item.value}
                        change={item.change}
                    />)}
                </div>
            </div>
            <div>
                <h2>list of products</h2>
                {props.errors
                    ? <div>{props.errors}</div>
                    : props.isFetching
                        ? <div>fetching products list...</div>
                        : <div>
                            {filteredProducts.length === 0
                                ? mapFunc(props.products)
                                : mapFunc(filteredProducts)
                            }
                        </div>
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return ({
        isFetching: state.products.isFetching,
        products: state.products.products,
        errors: state.products.errors
    })
}

export default connect(mapStateToProps, { fetchProducts })(Products)
