import React,{useState,useEffect} from 'react'
import { Button, Header, Segment, Popup,Form,Divider, Accordion, Icon, Table } from 'semantic-ui-react'
import {observer,inject} from 'mobx-react'



const Stock = inject('store')(observer((props)=>{
    //const [id,setId] = useState(itemId)
    
    const {store} = props

    useEffect(()=>{
        try {
            
        } catch (error) {
            
        }
    },[])
   return(
    <React.Fragment>
        <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>
                        Quantity
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                        Sub Quantity
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                        Sold
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                        Expiry
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                        Purchase Date
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {
                    store.stockStore.stock.map((stock)=>(
                        <Table.Row key={stock.id}>
                            <Table.Cell>
                                {
                                    parseFloat(stock.quantity)/parseFloat(stock.subQuantity)
                                }
                            </Table.Cell>
                            <Table.Cell>
                                {
                                    stock.quantity
                                }
                            </Table.Cell>
                            <Table.Cell>
                                0
                            </Table.Cell>
                            <Table.Cell>
                                {
                                    new Date(parseInt(stock.expiry)).toDateString()
                                }
                            </Table.Cell>
                            <Table.Cell>
                                {
                                    new Date(parseInt(stock.batch)).toDateString()
                                }
                            </Table.Cell>
                        </Table.Row>
                    ))
                }
            </Table.Body>
        </Table>
    </React.Fragment>
   )
}))

export default Stock
