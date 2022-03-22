import Button from '@mui/material/Button';

export const SubmitButton = () => {
    return (
        <>
            {/* <Link href="/acknowledgement" passHref> */}
                <Button 
                    color="primary" 
                    variant="contained" 
                    fullWidth 
                    type="submit" 
                    className="mb-9 font-bold bg-amber-400 hover:bg-amber-500 text-[15px]">
                    Submit
                </Button>
            {/* </Link> */}
        </>
    )
}
