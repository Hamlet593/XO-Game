const Positions = index => {
    const state = {
        0: '(1 : 1)',
        1: '(2 : 1)',
        2: '(3 : 1)',
        3: '(1 : 2)',
        4: '(2 : 2)',
        5: '(3 : 2)',
        6: '(1 : 3)',
        7: '(2 : 3)',
        8: '(3 : 3)',
    };
    return state[index];
}

export default Positions;