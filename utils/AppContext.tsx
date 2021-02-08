import React, { createContext, useReducer, useContext } from 'react'

export interface DeletePopupProps {
	isActive: boolean;
	link: string;
}

// We need to be able to set it to undefined if we are NOT dragging anything
export interface AppState {
	deletePopup: DeletePopupProps;
}

// Пока что мы хотим получать через контекст только стейт, поэтому указываем его тут
interface AppStateContextProps {
	state: AppState;
	dispatch: React.Dispatch<Action>;
}

const appData : AppState = {
	deletePopup: {
		isActive: false,
		link: ''
	}
}

// Реакт использует значение по умолчанию у контекста только если мы НЕ обернём ВСЁ приложение в контекст-провайдер.
// Так как наша задача как раз обернуть всё приложение (чтобы использовать контекст и редюсеры ВЕЗДЕ), то нам дефолтное значение не нужно вообще.
// Поэтому, передадим пустой объект в ЭппСтейтКонтекст и "присвоим" ему интерфейс AppStateContextProps
const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps)

// Здесь не объекты, а ИНТЕРФЕЙСы
// Испльзуем тип, а не интерфейс, потому что у типа можно использовать "юнион" - объединение нескольких интерфейсов / типов
// Each interface has a type property. This property will be our discriminant. It means
// that TypeScript can look at this property and tell what will be the other fields of the interface.
type Action =
	| {
			type: "SET_DELETE_POPUP";
			payload: DeletePopupProps;
		}
	| {
			type: "REMOVE_DELETE_POPUP";
		}


// Функция, которую мы передадим в хук юзРедюсер. На осное переданного экшена, она будет решать как изменять стейт приложения.
const appStateReducer = (state: AppState, action: Action): AppState => {
	
	switch (action.type) {

		case "SET_DELETE_POPUP": {
			if(!state.deletePopup.isActive){
				return {
					...state,
					deletePopup: action.payload
				}
			} else {
				return state
			}
		}

		case "REMOVE_DELETE_POPUP": {
			return {
				...state,
				deletePopup: appData.deletePopup
			}
		}	

		default: {
			return state
		}

	}
}

// Передаём в Реакт.ПропсВизЧилдрен пустой объект, потому что из пропсов нам нужен только чилдрен
export const AppStateProvider = ({ children }: React.PropsWithChildren<{}>) => {

	const [state, dispatch] = useReducer(appStateReducer, appData)

	return (
		<AppStateContext.Provider value={{ state, dispatch }}>
			{children}
		</AppStateContext.Provider>
	)
}

export const useAppState = () => {
	return useContext(AppStateContext)
}