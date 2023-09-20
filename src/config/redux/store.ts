import { menuSlice } from "@/widgets/Header/model/menuSlice";
import { configureStore, Action, ThunkAction } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'

export function makeStore() {
	return configureStore({
		reducer: {
			menu: menuSlice.reducer
		}
	})
}
export const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

setupListeners(store.dispatch)
