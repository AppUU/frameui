import React, { PureComponent } from 'react';
import { ScrollView } from 'react-native';
import { View, Text, Toolbar, Item, List } from '../frameui';

class Main extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { title: 'View-Layout', component: 'ViewPage' },
                { title: 'Text', component: 'TextPage' },
                { title: 'TextInput', component: 'TextInputPage' },
                { title: 'Button', component: 'ButtonPage' },
                { title: 'Touchable', component: 'TouchablePage' },
                { title: 'Icon', component: 'IconPage' },
                { title: 'Divider', component: 'DividerPage' },
                { title: 'Label', component: 'LabelPage' },
                { title: 'Toolbar', component: 'ToolbarPage' },
                { title: 'List-Item', component: 'ListItemPage' },
                { title: 'Modal', component: 'ModalPage' },
                { title: 'Card-CardHeader', component: 'CardPage' },
                { title: 'Avatar', component: 'AvatarPage' },
                { title: 'Tooltip', component: 'TooltipPage' },
                { title: 'Toast', component: 'ToastPage' },
                { title: 'ARTPage', component: 'ARTPage' },
                { title: 'SVGPage', component: 'SVGPage' },
                { title: 'Storage', component: 'StoragePage' },
                { title: 'Animated', component: 'AnimatedPage' },
                { title: 'ListView', component: 'ListViewPage' },
                { title: 'FlatList', component: 'FlatListPage' },
                { title: 'UltimateList', component: 'UltimateListPage' },
                { title: 'Swipe', component: 'SwipePage' },
            ]
        };
    }
    componentDidMount() {
    }
    render() {
        const { theme } = this.props
        const { data } = this.state
        return (
            <View>
                <Toolbar title={'FRAGME-UI'} subtitle={'created by zjiaxin'} />
                {/* <Text textColor={'info'} text={'纳税人识别号'} /> */}
                {/* <Text textColor={'primary'} text={'纳税人识别号'} /> */}
                <List>
                    {data.map(this.renderItem.bind(this))}
                </List>
            </View>
        );
    }

    renderItem(item, i) {
        return (
            <Item key={i} title={item.title} onPress={this.onPress.bind(this, item)} />
        )
    }

    onPress = (item) => {
        const { navigator } = this.props
        navigator.push({ id: item.component, params: { title: item.title } })
    }
}

export default Main;
