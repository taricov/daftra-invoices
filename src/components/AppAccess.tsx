import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, Button, TextInput } from '@mantine/core';

export default function AppAccess() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Connect.." 
      classNames={{body: "text-white app-grad", header: "!text-white app-grad"}}
      className="text-white !bg-violet-800 !bg-opacity-0 hover:!bg-opacity-30 transition-all duration-300 font-medium rounded">
        <TextInput 

        classNames={{input:"bg-violat-100 bg-opacity-10", label:"text-white"}}
        label="Subdomain" placeholder="Subdomain" />
        <TextInput
        classNames={{input:"bg-violat-100 bg-opacity-10", label:"text-white"}}
          data-autofocus
          label="API Key"
          placeholder=""
          mt="md"
        />
      </Modal>

      <Group position="center">
        <Button className="app-btn" onClick={open}>Connect</Button>
      </Group>
    </>
  );
}