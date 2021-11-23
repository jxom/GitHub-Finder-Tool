import { Input, Button, Box } from 'bumbag'
import { Heading } from 'bumbag';
import { Container} from 'bumbag';



function SearchForm() {
    return (
        <>
            
                <Container>
                    <Box width='100%' height="60vh" alignY="center" alignX="center" boxShadow="2px 2px 10px" margin='1.5rem' marginTop='3rem' >
                        <Heading>GitHub Finder Tool!</Heading>
                            <Input margin='1rem' size='large' type='search' state="success" palette="primary" placeholder="Enter your username here..." variant="filled"/>
                            <Button palette="secondary">Search User</Button>
                    </Box>
                </Container>
            
        </>
    )
}


export default SearchForm