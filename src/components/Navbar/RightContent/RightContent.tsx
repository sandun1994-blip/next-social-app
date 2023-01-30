import AuthModal from '@/components/Modal/Auth/AuthModal';
import { Flex } from '@chakra-ui/react';
import React from 'react';
import AuthButtons from './AuthButtons';

type RightContentProps = {
    
};

const RightContent:React.FC<RightContentProps> = () => {
    
    return (<>
    
    <Flex justify={'center'} align='center'>
    <AuthModal/>
        <AuthButtons/>
    </Flex>
    
    </>)
}
export default RightContent;