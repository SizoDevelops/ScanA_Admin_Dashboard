import { ModalProvider } from '@/components/Settings/modalCont';
import UpdateMembers from '@/components/Settings/update-members';
import React from 'react';

const Page = () => {
    return (
        <ModalProvider>
            <UpdateMembers/>
        </ModalProvider>
    );
}

export default Page;
