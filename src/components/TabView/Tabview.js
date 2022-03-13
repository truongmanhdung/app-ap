import React, { useEffect } from 'react'
import { ScrollView } from 'react-native';
import { Tab, TabView, } from 'react-native-elements';
function Tabview({ colums, logic, data }) {
    const [index, setIndex] = React.useState(0);
    const [api, setApi] = React.useState('')
    useEffect(() => {
        const ss = () => (
            colums.map((item) => {
                if (item.id === index) {
                    setApi(item.keyIndex)
                    return logic(api)
                }
            })
        )
        ss()
    })
    return (
        <>
            <Tab
                value={index}
                onChange={(e) => setIndex(e)}
                indicatorStyle={{
                    backgroundColor: 'red',
                    height: 2,
                }}
                variant="default"
            >
                {colums.map((item, index) => (
                    <Tab.Item
                        key={index}
                        title={item.title}
                        titleStyle={item.titleStyle}
                    />
                ))}
            </Tab>
            <ScrollView>
                <TabView value={index} onChange={setIndex} animationType="spring">
                    {colums.map((item, i) => (
                        <TabView.Item key={i} >
                            {data()}
                        </TabView.Item>
                    ))}
                </TabView>
            </ScrollView>
        </>
    )
}
Tabview.propsTypes = {
    colums: Array,
    data: Function,
    logic: Function
}
export default Tabview
