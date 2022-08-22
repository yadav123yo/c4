import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Image
} from "@chakra-ui/react";
export function PModal({ isModalOpen, setIsModalOpen, data }) {
  const onClose = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div>
        <Modal isOpen={isModalOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              <Breadcrumb>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                  <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
              {data.title}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text> {data.brand} </Text>
              {/* <Image> {data.image} </Image> */}
              <Text> {data.title} </Text>
              <Text> {data.price} </Text>
            </ModalBody>

            <ModalFooter></ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </>
  );
}
