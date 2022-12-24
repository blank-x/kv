import XAlert from './components/alert'
import XBacktop from './components/backtop'
import XBreadcrumbItem from './components/breadcrumb-item'
import XButton from './components/button'
import XIcon from './components/icon'
import XTag from './components/tag'
import XSkeleton from './components/skeleton'
import XRow from './components/row'
import XCol from './components/col'
import XShowmore from './components/show-more'
import XLimit  from './components/limit-textarea'
import XLoadingBar  from './components/loading-bar'
import XMetaInfo  from './components/meta-info'

const components = {
  XAlert,
  XBacktop,
  XBreadcrumbItem,
  XButton,
  XIcon,
  XTag,
  XSkeleton,
  XRow,
  XCol,
  XShowmore,
  XLimit,
  XLoadingBar,
  XMetaInfo
}

const install = (Vue) => {
  if (install.installed) return;

  Object.keys(components).forEach(key => {
    Vue.component(key, components[key]);
  });
  XMetaInfo.install(Vue)
  Vue.prototype.$loading = XLoadingBar

}

export default {
  install
}
