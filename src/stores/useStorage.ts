import { writable } from "svelte/store";
import type {Writable} from 'svelte/store'

export function useStorage<Value>(key: string, initialValue: Value): Writable<Value>{
    let serialise = JSON.stringify
    let deserialise = JSON.parse

    let storedValue: Value = deserialise(localStorage.getItem(key))

    let store = writable(storedValue ? storedValue : initialValue)
    store.subscribe(value => localStorage.setItem(key, serialise(value)))

    return store
}