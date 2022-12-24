<template>
  <transition name="x-alert-fade">
    <div
      :class="[typeClass, center ? 'is-center' : '', 'is-' + effect]"
      class="x-alert"
      v-show="visible">
      <i :class="[ iconClass, isBigIcon ]" class="x-alert__icon" v-if="showIcon"></i>
      <div class="x-alert__content">
                <span :class="[ isBoldTitle ]" class="x-alert__title" v-if="title || $slots.title">
                  <slot name="title">{{ title }}</slot>
                </span>
        <p class="x-alert__description" v-if="$slots.default && !description">
          <slot></slot>
        </p>
        <p class="x-alert__description" v-if="description && !$slots.default">{{ description }}</p>
        <i :class="{ 'is-customed': closeText !== '', 'x-icon-close': closeText === '' }"
           @click="close()" class="x-alert__closebtn"
           v-show="closable">{{closeText}}</i>
      </div>
    </div>
  </transition>
</template>

<script type="text/babel">
  const TYPE_CLASSES_MAP = {
    'success': 'x-icon-success',
    'warning': 'x-icon-warning',
    'error': 'x-icon-error'
  };
  export default {
    name: 'XAlert',

    props: {
      title: {
        type: String,
        default: ''
      },
      description: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: 'info'
      },
      closable: {
        type: Boolean,
        default: true
      },
      closeText: {
        type: String,
        default: ''
      },
      showIcon: Boolean,
      center: Boolean,
      effect: {
        type: String,
        default: 'light',
        validator: function (value) {
          return ['light', 'dark'].indexOf(value) !== -1;
        }
      }

    },

    data() {
      return {
        visible: true
      };
    },

    methods: {
      close() {
        this.visible = false;
        this.$emit('close');
      }
    },

    computed: {
      typeClass() {
        return `x-alert--${this.type}`;
      },

      iconClass() {
        return TYPE_CLASSES_MAP[this.type] || 'x-icon-info';
      },

      isBigIcon() {
        return this.description || this.$slots.default ? 'is-big' : '';
      },

      isBoldTitle() {
        return this.description || this.$slots.default ? 'is-bold' : '';
      }
    }
  };
</script>
