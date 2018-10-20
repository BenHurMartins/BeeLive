import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import { toggleNewHiveFormModal } from "../../actions/ModalActions";
import { connect } from "react-redux";

class NewHiveFormModal extends Component {
  constructor(props) {
    super(props);

    this.state = {};
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
            <View>
              <Text style={styles.mainModalText}>Oi!</Text>
              <Text style={styles.secondaryModalText}>
                Nosso App está aqui para te ajudar a vender suas coisas sem sair
                de casa, chega de ter que marcar encontros em estações de metrô
                ou praças. Venda primeiro em seu próprio condomínio. Antes de
                começar precisamos que você complete seu cadastro.
              </Text>
            </View>
          </View>
          <View>
            <TouchableOpacity
              style={styles.confirmButton}
              onPress={() => this.props.toggleNewHiveFormModal()}
            >
              <Text style={styles.buttonText}>Ok</Text>
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
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  mainModalText: {
    fontSize: 17,
    margin: 7,
    textAlign: "center"
  },
  secondaryModalText: {
    fontSize: 13,
    margin: 3,
    textAlign: "justify"
  },
  confirmButton: {
    height: 55,
    backgroundColor: "#FBE312",
    justifyContent: "center",
    alignItems: "center",
    borderBottomRightRadius: 4,
    borderBottomLeftRadius: 4
  },
  buttonText: {
    color: "#4A4A4A",
    fontSize: 15
  }
});

mapStateToProps = state => {
  return {
    showNewHiveFormModal: state.ModalReducer.showNewHiveFormModal
  };
};

export default connect(
  mapStateToProps,
  { toggleNewHiveFormModal }
)(NewHiveFormModal);
