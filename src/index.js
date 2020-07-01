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
}

const install = (Vue)=>{
    if(install.installed) return;

    Object.keys(components).forEach(key => {
        Vue.component(key, components[key]);
    });

}

export default {
    install
}
