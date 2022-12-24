import KvAlert from './components/alert'
import KvBacktop from './components/backtop'
import KvBreadcrumbItem from './components/breadcrumb-item'
import KvButton from './components/button'
import KvIcon from './components/icon'
import KvTag from './components/tag'
import KvSkeleton from './components/skeleton'
import KvRow from './components/row'
import KvCol from './components/col'
import KvShowmore from './components/show-more'
import KvLimit  from './components/limit-textarea'
import KvLoadingBar  from './components/loading-bar'
import KvMetaInfo  from './components/meta-info'

const components = {
  KvAlert,
  KvBacktop,
  KvBreadcrumbItem,
  KvButton,
  KvIcon,
  KvTag,
  KvSkeleton,
  KvRow,
  KvCol,
  KvShowmore,
  KvLimit,
  KvLoadingBar,
  KvMetaInfo
}

const install = (Vue) => {
  if (install.installed) return;

  Object.keys(components).forEach(key => {
    Vue.component(key, components[key]);
  });
  KvMetaInfo.install(Vue)
  Vue.prototype.$loading = KvLoadingBar

}

export default {
  install
}
