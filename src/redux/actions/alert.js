export const showAlert = (message) => ({
    type: 'SHOW_ALERT',
    message,
});

export const hideAlert = () => ({
    type: 'HIDE_ALERT',
});
