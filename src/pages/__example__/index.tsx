import { connect } from 'react-redux'
import Taro from '@tarojs/taro'
import { Page } from '@/components'
import {} from './components'
import type { ConnectRC } from '@/typings/dva'
import type { IProps, IPageData } from './index.d'

const Index: ConnectRC<IProps> = (props) => {
	const {} = props

	return <Page title='example'>123</Page>
}

const getInitialProps = ({ example }: IPageData) => ({
	page_data: example
})

export default Taro.$memo(connect(getInitialProps)(Index))
