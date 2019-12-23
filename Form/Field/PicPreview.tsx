import * as React from 'react'
import { Icon, Spin } from 'antd'

import './PicPreview.scss'

const { useState } = React

type Props = {
  showList: boolean,
  current: string,
  url: string[] | string,
  style?: Object
  onHide?: VoidFunction
}

/**
 * 图片预览
 */
export default function PicPreviewer(
  {
    showList = true,
    url = [],
    style = {},
    current = '',
    onHide,
  }: Props,
) {
  let images = []
  if (url) {
    images = typeof url === 'string' ? [url] : url
  }
  images = images.filter(item => item)

  const [visible, setVisible] = useState(false)
  const [src, setSrc] = useState(current)
  const [deg, setDeg] = useState(0)
  const [loading, setLoading] = useState(true)
  const [isInit, setIsInit] = useState(false)

  const handleCancel = () => {
    if (onHide) onHide()
    setVisible(false)
  }
  const handleShow = (targetSrc: string) => {
    setVisible(true)
    setLoading(true)
    setSrc(targetSrc)
  }

  const prev = () => {
    setLoading(true)
    let idx = images.indexOf(src)
    idx -= 1
    idx = idx < 0 ? images.length - 1 : idx
    handleShow(images[idx])
    // setDeg(0)
  }
  const next = () => {
    setLoading(true)
    let idx = images.indexOf(src)
    idx += 1
    idx = idx >= images.length ? 0 : idx
    handleShow(images[idx])
    // setDeg(0)
  }

  const rotation = () => {
    setDeg(deg + 1)
  }

  const rotationBack = () => {
    setDeg(deg - 1)
  }

  const onLoad = () => {
    setLoading(false)
  }

  if (!showList && !isInit) {
    handleShow(current)
    setIsInit(true)
  }

  return (
    <>
      {showList
      && (
        <div className="react-conf-form-pic-row">
          {images
            .map((item, idx): any => {
              const key = `${item}_${idx}`
              return (
                <div
                  role="link"
                  tabIndex={idx}
                  key={key}
                  className="react-conf-form-pic-box"
                  onClick={() => handleShow(item)}
                  onKeyDown={() => handleShow(item)}
                  style={style}
                >
                  <img src={item} alt="" />
                </div>
              )
            })
          }
        </div>
      )
      }

      {visible
      && (
        <div className="react-conf-form-pic-viewer">
          <div className="react-conf-form-pic-spin react-conf-form-pic-white-spin"><Spin spinning={loading} tip="loading..." size="large" /></div>
          <div className="react-conf-form-pic-container" onClick={handleCancel} />
          <div className="react-conf-form-pic-buttons">
            <div className="react-conf-form-pic-icon" onClick={handleCancel}>
              <Icon type="close" />
            </div>
            {images.length > 1 && (
              <div className="react-conf-form-pic-icon" onClick={prev}>
                <Icon type="left" />
              </div>
            )}

            {images.length > 1 && (
              <div className="react-conf-form-pic-icon" onClick={next}>
                <Icon type="right" />
              </div>
            )}
            <div className="react-conf-form-pic-icon" onClick={rotation}>
              <Icon type="redo" />
            </div>
            <div className="react-conf-form-pic-icon" onClick={rotationBack}>
              <Icon type="undo" />
            </div>
          </div>

          <img
            alt="previmg"
            src={src}
            onLoad={onLoad}
            style={{ transform: `translate(-50%, -50%) rotate(${deg * 90}deg)`, opacity: loading ? 0 : 1 }}
            className="react-conf-form-pic-img-container"
          />
        </div>
      )
      }
    </>
  )
}
