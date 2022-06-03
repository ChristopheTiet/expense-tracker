import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate } from "../../ducks/filter-slice";

test('should generate set start date action', () => {
    const action = setStartDate(0);
    expect(action).toEqual({
        type: 'filter/setStartDate',
        payload: 0
    })
})

test('should generate set end date action', () => {
    const action = setEndDate(0);
    expect(action).toEqual({
        type: 'filter/setEndDate',
        payload: 0
    })
})

test('should generate text filter action with provided value', () => {
    const action = setTextFilter('rent');
    expect(action).toEqual({
        type: 'filter/setTextFilter',
        payload: 'rent'
    })
})

test('should generate text filter action with default value', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'filter/setTextFilter',
        payload: ''
    })
})

test('should generate sort by amount action', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'filter/sortByAmount',
    })
})

test('should generate sort by date action', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'filter/sortByDate',
    })
})
