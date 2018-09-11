import React, { Component } from 'react';

import { StyleProp, ViewStyle } from 'react-native';

interface IBerImageProps {

    /**
     * 样式
     */
    style?: StyleProp<ViewStyle>,

    /**
     * 圖片的鏈接
     */
    uri: string,

    /**
     * default:'contain'
     */
    resizeMode?: string,

    /**
     *  default:0 圓角
     */
    borderRadius?: number,

    /**
     * default:small 加載中指示的大小
     */
    indicatorSize: string,

    /**
     * default :'#f6f6f6'
     */
    backgroundColor?: string,

    /**
     * 是否展示佔位圖片  default:false
     */
    showPlaceHolder?: boolean,

    /**
     * 是否顯示加載中的動畫 默認 false
     */
    showLoading?: boolean,

    /**
     * 是否顯示加載失敗
     */
    showError?: boolean,


}

export default class IBerImage extends Component<IBerImageProps, {}> { }
