import React, { Component } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import { ButtonGroup, Text, Button } from "react-native-elements";
import { Picker, Form, Icon } from "native-base";
import { toggleNewHiveFormModal } from "../../actions/ModalActions";
import { setNewMarker } from "../../actions/MarkerActions";
import { connect } from "react-redux";

class NewHiveFormModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttons: ["Pequena", "Média", "Grande"],
      selectedIndex: 0,
      beeSpecies: ""
    };
  }

  _handleNewHive() {
    var newMarker = this.props.newMarker;

    newMarker = {
      ...newMarker,
      size: this.state.selectedIndex + 1,
      beeSpecies: this.state.beeSpecies.value,
      hive: false
    };

    this.props.setNewMarker(newMarker);
  }

  render() {
    return (
      <View>
        <Modal
          isVisible={this.props.showNewHiveFormModal}
          animationIn={"slideInLeft"}
          animationOut={"slideOutRight"}
        >
          <View style={styles.mainView}>
            <Form>
              <Text style={styles.label}>Qual é o tamanho da colméia?</Text>
              <ButtonGroup
                onPress={selectedIndex => this.setState({ selectedIndex })}
                selectedIndex={this.state.selectedIndex}
                buttons={this.state.buttons}
                containerStyle={{ height: 50 }}
                selectedButtonStyle={{ backgroundColor: "#FBE312" }}
              />
              <Text style={styles.label}>Qual é o tipo de abelhas?</Text>
              <Picker
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                placeholder="Escolha uma espécie"
                note
                mode="dropdown"
                value={this.state.beeSpecies}
                style={{
                  width: 300,
                  height: 50,
                  borderStyle: "solid",
                  borderBottomColor: "#FBE312"
                }}
                selectedValue={this.state.beeSpecies}
                onValueChange={selected =>
                  this.setState({ beeSpecies: selected })
                }
                hideUnderline
                itemTextStyle={{ color: "#4A4A4A" }}
              >
                <Picker.Item label="Italiana" value="italiana" />
                <Picker.Item label="Alemã" value="alema" />
                <Picker.Item label="Carniça" value="carnica" />
                <Picker.Item label="Caucasiana" value="caucasiana" />
                <Picker.Item label="Européia" value="europeia" />
                <Picker.Item label="Africana" value="africana" />
                <Picker.Item label="Oriental" value="oriental" />
                <Picker.Item label="Sem Ferrão" value="semFerrao" />
                <Picker.Item label="Não Sei" value="idk" />
              </Picker>
            </Form>
            <TouchableOpacity
              style={styles.confirmButton}
              onPress={() => {
                this.props.toggleNewHiveFormModal();
                this._handleNewHive();
              }}
            >
              <Text style={styles.buttonText}>Enviar Dados</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  label: {
    fontSize: 20,
    margin: 7,
    color: "#4A4A4A"
  },
  secondaryModalText: {
    fontSize: 13,
    margin: 3,
    textAlign: "justify"
  },
  confirmButton: {
    height: 50,
    backgroundColor: "#FBE312",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4
  },
  buttonText: {
    color: "#4A4A4A",
    fontSize: 15
  }
});

mapStateToProps = state => {
  return {
    showNewHiveFormModal: state.ModalReducer.showNewHiveFormModal,
    newMarker: state.MarkerReducer.newMarker
  };
};

export default connect(
  mapStateToProps,
  { toggleNewHiveFormModal, setNewMarker }
)(NewHiveFormModal);
