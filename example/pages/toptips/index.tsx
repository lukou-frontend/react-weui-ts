/*
 * @Author: 刘佑祥
 * @LastEditors: 刘佑祥
 * @LastEditTime: 2020-08-03 11:05:13
 */

import * as React from "react";
import { Button, Toptips } from "../../../build/es";
import Page from "../../component/page";

const ToptipsDemo = () => {
  const [showWarn, setShowWarn] = React.useState(false)
  const [showSuccess, setShowSuccess] = React.useState(false)
  const [showInfo, setShowInfo] = React.useState(false)
  const [warnTimer, setWarnTimer] = React.useState(null)
  const [successTimer, setSuccessTimer] = React.useState(null)
  const [infoTimer, setInfoTimer] = React.useState(null)

  React.useEffect(() => {
    warnTimer && clearTimeout(warnTimer);
    successTimer && clearTimeout(successTimer);
    infoTimer && clearTimeout(infoTimer);
  }, [])

  const handleShowSuccess = () => {
    setShowSuccess(true)
    setSuccessTimer(setTimeout(() => {
      setShowSuccess(false)
    }, 2000))
  }

  const handleShowInfo = () => {
    setShowInfo(true)
    setInfoTimer(setTimeout(() => {
      setShowInfo(false)
    }, 2000))
  }
  const handleShowWarn = () => {
    setShowWarn(true)
    setWarnTimer(setTimeout(() => {
      setShowWarn(false)
    }, 2000))
  }
  return (
    <Page
      className="toptips"
      title="Toptips"
      subTitle="弹出式提示"
      spacing
    >
      <Button onClick={handleShowWarn.bind(this)} type="default">
        Warn Toptip
      </Button>
      <Button onClick={handleShowSuccess.bind(this)} type="default">
        Primary Toptip
      </Button>
      <Button onClick={handleShowInfo.bind(this)} type="default">
        Info Toptip
      </Button>

      <Toptips type="warn" show={showWarn}>
        {" "}
        Oops, something is wrong!{" "}
      </Toptips>
      <Toptips type="primary" show={showSuccess}>
        {" "}
        Success submited!{" "}
      </Toptips>
      <Toptips type="info" show={showInfo}>
        {" "}
        Thanks for coming!{" "}
      </Toptips>
    </Page>
  );
}

export default ToptipsDemo;
