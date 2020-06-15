import React,{useState} from 'react'
import { Button, Header, Segment, Popup,Form,Divider, Card, Dimmer,Loader } from 'semantic-ui-react'
import {observer,inject} from 'mobx-react'
import * as uuid from 'uuid'

import TruncateUtil from '../../utils/TruncateUtil'
import CategoriesQueries from '../../api/Categories/CategoriesQueries'

const Categories = inject('store')(observer((props)=>{
    const [category,setCategories] = useState({name:'',overview:''})
    const [isDimmed,setDimmer] = useState(false)
    const { store } = props;

    const handleChange = (e) =>{
        let value = e.target.value
        let field = e.target.id
        setCategories((category)=>({...category,[field] : value}))
    }

    const reset = ()=>{
        //setCategories((category)=>({...category,id : uuid.v4()}))
        setCategories((category)=>({...category,name : ''}))
        setCategories((category)=>({...category,overview : ''}))
    }

    return(
        <React.Fragment>
            <Header as='h2' attached='top'>
                <Popup
                    trigger={<Button content='Categories' icon='plus' label={{ as: 'a', basic: true, content: store.categoriesStore.howManyCategories }}/>}
                    position="bottom left" on="click">
                    <Dimmer active={isDimmed} inverted>
                        <Loader inverted>Saving</Loader>
                    </Dimmer>
                    <Form>
                        <Form.Field>
                            <label>New Categories</label>
                            <input value={category.name} id="name" placeholder="New Category" onChange={handleChange}/>
                        </Form.Field>
                        <Form.Field>
                            <label>Overview</label>
                            <textarea value={category.overview} id="overview" label='Overview' placeholder='Content overview...' onChange={handleChange}/>
                        </Form.Field>
                        <Divider/>
                        <Button onClick={
                            ()=>{
                                if(category.name == ""){

                                }else{
                                    setDimmer(true)
                                    CategoriesQueries.SaveCategory(category).then((result)=>{
                                        setDimmer(false)
                                        reset()
                                    },(err)=>{
                                        console.log('failed to save')
                                    })
                                }
                            }
                        }>Save</Button>
                    </Form>
                </Popup>
            </Header>
            <Segment attached>
                <Card.Group itemsPerRow={3}>
                    {
                        store.categoriesStore.categories.map(category=>(
                            <Card key={category.id} raised>
                                <Card.Content>
                                    <Card.Header>
                                        {category.name}
                                    </Card.Header>
                                    <Card.Description>
                                        { TruncateUtil.Truncate(category.overview,20,'...')}
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    <div className='ui two buttons'>
                                        <Button basic color='green'>
                                            Add Marketer
                                        </Button>
                                        <Button basic color='blue'>
                                            View Marketers
                                        </Button>
                                    </div>
                                </Card.Content>
                            </Card>
                        ))
                    }
                </Card.Group>
            </Segment>
        </React.Fragment>
    )
}))

export default Categories;