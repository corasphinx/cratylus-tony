import logo from './logo.svg';
import './App.css';
import { Container, Button, Modal, Box, Typography } from '@material-ui/core';
import { AddCircleOutline, FolderOpen, Save } from '@material-ui/icons';
import { useState } from 'react';
import ColorPicker from 'material-ui-color-picker'

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '8px',
  boxShadow: 24,
  p: 4,
}
function App() {
  const [isOpenAddModal, showOpenModal] = useState(false)

  const openAddModal = () => {
    showOpenModal(true)
  }
  const addDiv = () => {
    console.info("addDiv")
  }
  const importDivs = () => {
    console.info("importDivs")
  }
  const exportDivs = () => {
    console.info("exportDivs")
  }
  return (
    <Container>
      <Button variant="outlined" startIcon={<AddCircleOutline />} onClick={openAddModal}>Add Div</Button>
      <Button variant="outlined" startIcon={<FolderOpen />} onClick={importDivs}>Import from JSON</Button>
      <Button variant="outlined" startIcon={<Save />} onClick={exportDivs}>Export to JSON</Button>

      <Modal
        open={isOpenAddModal}
        onClose={() => showOpenModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Select Div Color
          </Typography>
          <ColorPicker
            name='color'
            defaultValue='#000'
            // value={this.state.color} - for controlled component
            onChange={color => console.log(color)}
          />
        </Box>
      </Modal>
    </Container>
  );
}

export default App;
