import store from '@/store'

export default function useStore(module) {
  return store[module]
}
