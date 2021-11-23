import { Input, Button, Box } from 'bumbag'
import { Heading } from 'bumbag';



function SearchForm() {
    return (
        <>
            
                <Box width='100%' height="60vh" alignY="center" alignX="center" border="1px dotted purple" margin='1.5rem' > 
                    <Heading>GitHub Finder Tool!</Heading>
                        <Input margin='1rem' size='large' type='search' state="success" palette="primary" placeholder="Enter your username here..." variant="filled"/>
                        <Button palette="secondary">Search User</Button>
                </Box>
            
        </>
    )
}


export default SearchForm