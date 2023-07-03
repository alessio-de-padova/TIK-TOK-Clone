export const gridStyle = (theme) => ({
    borderBottom: '1px solid rgb(200, 200, 200)',
    paddingBottom: '1rem',
    [theme?.breakpoints.up('lg')]: {
        marginLeft: '6rem',
    },
    margin: '1rem',
}
)
export const gridTitleStyle = (theme) => ({
    marginTop: '1rem',
    color: 'rgb(22, 24, 35, 0.75)',
    marginBottom: '1rem',
    fontWeight: 600,
    fontSize: '0.8rem'
})