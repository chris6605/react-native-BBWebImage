import React, { Component } from 'react';

import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ActivityIndicator
} from 'react-native';

import AppConst from '../../const/AppConst';

import BaseComponent from '../../base/BaseComponent';

import SvgUri from '../SvgUri';

import SvgMap from '../../resource/SvgMap';

import FastImage from 'react-native-fast-image';


export default class BBWebImage extends BaseComponent {

    static defaultProps = {
        borderRadius: 0,
        showPlaceHolder: false,
        backgroundColor: '#f6f6f6',
        showLoading: false,
        showError: false,
        indicatorSize: 'small',
        resizeMode: 'contain'
    }


    constructor(props) {
        super(props)
        this.state = {
            uri: this.props.uri || '',
            isAnimating: true,
            isShowError: false
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ ...nextProps })
    }


    render() {
        return (
            <View style={{ ...this.props.style, borderRadius: this.props.borderRadius, overflow: 'hidden' }}>
                <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: this.props.backgroundColor }} />
                {this.props.showPlaceHolder && !this.state.isShowError ? <SvgUri style={{ position: 'absolute', top: this.props.style.height / 3, left: this.props.style.width / 3 }} width={this.props.style.width / 3} height={this.props.style.height / 3} source={SvgMap.place_image} /> : null}
                <FastImage
                    style={{ width: this.props.style.width, height: this.props.style.height }}
                    source={{ uri: this.state.uri }}
                    resizeMode={this.props.resizeMode}
                    onLoadStart={() => {
                        this.setState({ isAnimating: true })
                    }}
                    onLoadEnd={() => {
                        this.setState({ isAnimating: false })
                    }}
                    onError={() => {
                        this.setState({ isShowError: true, isAnimating: false })
                    }}
                    onProgress={e => {
                        //todo 这个进度不准确 待定解决方案
                    }}
                />

                {
                    this.props.showLoading ? <ActivityIndicator style={{ position: 'absolute', top: this.props.style.height / 2 - 10, left: this.props.style.width / 2 - 10 }}
                        size={this.props.indicatorSize}
                        animating={this.state.isAnimating}
                        color='#fff'
                    /> : null
                }

                {this.state.isShowError && this.props.showError ? this.renderError() : null}
            </View>
        );
    }


    renderError() {
        return <View style={{ position: 'absolute', top: 0, left: 0, width: this.props.style.width, height: this.props.style.height, justifyContent: 'center', alignItems: 'center' }}>
            <SvgUri width={this.props.style.width / 3} height={this.props.style.height / 3} source={SvgMap.place_image_fail} />
            <Text style={{ fontSize: AppConst.getSize(10), color: '#fff', textAlign: 'center', paddingTop: 5 }}>圖片加載失敗</Text>
        </View>
    }



}


