import { writable } from 'svelte/store';

export const count = writable(0);

// count.update(n => n + 1)