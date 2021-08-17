import Taro from '@tarojs/taro'
import { CustomWrapper, View, Button } from '@tarojs/components'
import { Modal, Icon } from '@/components'
import { close, check } from '@/components/Icon/icons'
import styles from './index.less'
import type { IProps as IPropsModal } from '@/components/Modal'

export interface IProps extends IPropsModal {
	title?: string
	okVisible?: boolean
	onOk?: () => void
}

const Index = (props: IProps) => {
	const { children, title, okVisible, onClose, onOk } = props

	return (
		<CustomWrapper>
			<Modal
				{...props}
				position='bottom'
				style={{
					backgroundColor: 'white',
					borderTopLeftRadius: 20,
					borderTopRightRadius: 20
				}}
			>
				<View className={styles._local}>
					<View
						className='icon_wrap btn_close flex justify_center align_center absolute'
						onClick={onClose}
					>
						<Icon icon={close} size={20}></Icon>
					</View>
					{title && (
						<View className='title_wrap w_100 border_box text_center'>
							{title}
						</View>
					)}
					{okVisible && (
						<View
							className='icon_wrap btn_confirm flex justify_center align_center absolute'
							onClick={onOk}
						>
							<Icon icon={check} size={20} color='white'></Icon>
						</View>
					)}
					<View className='content_wrap'>{children}</View>
				</View>
			</Modal>
		</CustomWrapper>
	)
}

export default Taro.$memo(Index)
