import * as React from 'react';
import { Button, Toast } from '../../../build/es';
import Page from '../../component/page';

const ToastDemo = () => {
  const [showToast, setShowToast] = React.useState(false)
  const [showLoading, setShowLoading] = React.useState(false)
  const [toastTimer, setToastTimer] = React.useState(null)
  const [loadingTimer, setLoadingTimer] = React.useState(null)

  React.useEffect(() => {
    toastTimer && clearTimeout(toastTimer);
    loadingTimer && clearTimeout(loadingTimer);
  }, [])
  const handleShowToast = () => {
    setShowToast(true)
    setToastTimer(setTimeout(() => {
      setShowToast(false)
    }, 2000))
  }

  const handleShowLoading = () => {
    setShowLoading(true)
    setLoadingTimer(setTimeout(() => {
      setShowLoading(false)
    }, 2000))
  }

  return (
    <Page className="toast" title="Toast" subTitle="弹出式提示" spacing>
      <Button onClick={handleShowToast.bind(this)} type="default">
        Success Toast
        </Button>
      <Button onClick={handleShowLoading.bind(this)} type="default">
        Loading Toast
        </Button>

      <Toast icon="success-no-circle" show={showToast}>
        Done
        </Toast>
      <Toast icon="loading" show={showLoading}>
        Loading...
        </Toast>
    </Page>
  );
}
export default ToastDemo
