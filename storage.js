export const KEY='beachClubBookings';
export function loadBookings(){try{const raw=localStorage.getItem(KEY);if(!raw)return {bookings:[],error:null};const value=JSON.parse(raw);if(!Array.isArray(value)||!value.every(b=>b&&typeof b.id==='string'&&typeof b.date==='string'&&Array.isArray(b.seats)&&['confirmed','cancelled'].includes(b.status)&&Number.isFinite(b.start)&&Number.isFinite(b.end)))throw Error('format');return {bookings:value,error:null}}catch{return {bookings:[],error:'Сохранённые данные повреждены или недоступны. Можно сбросить демо-данные.'}}}
export function saveBookings(items){try{localStorage.setItem(KEY,JSON.stringify(items));return true}catch{return false}}
export function clearBookings(){try{localStorage.removeItem(KEY);return true}catch{return false}}
