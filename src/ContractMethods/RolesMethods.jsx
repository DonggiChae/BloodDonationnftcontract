import BloodDonationContract from "../klaytn/BloodDonationContract";
import { toast } from "react-toastify";

export const addAdmin = async (account) => {
  await BloodDonationContract.methods
    .addAdmin(account)
    .send({
      from: window.klaytn.selectedAddress,
      gas: 350000,
    })
    .then(() =>
      toast.success(`성공적으로 관리자 권한을 주었습니다.`, {
        position: toast.POSITION.TOP_CENTER,
      })
    )
    .catch((error) =>
      toast.error("권한이 없습니다.", { position: toast.POSITION.TOP_CENTER })
    );
};

export const renounceAdmin = async (account) => {
  await BloodDonationContract.methods
    .renounceAdmin(account)
    .send({
      from: window.klaytn.selectedAddress,
      gas: 350000,
    })
    .then(() =>
      toast.success(`관리자 권한을 포기하였습니다.`, {
        position: toast.POSITION.TOP_CENTER,
      })
    )
    .catch((error) =>
      toast.error("권한이 없습니다.", { position: toast.POSITION.TOP_CENTER })
    );
};

export const grantHospitalRole = async (account) => {
  await BloodDonationContract.methods
    .grantHospitalRole(account)
    .send({
      from: window.klaytn.selectedAddress,
      gas: 350000,
    })
    .then(() => {
      toast.success(`성공적으로 병원 권한을 주었습니다.`, {
        position: toast.POSITION.TOP_CENTER,
      });
    })
    .catch((error) =>
      toast.error("권한이 없습니다.", { position: toast.POSITION.TOP_CENTER })
    );
};

export const grantRedCrossRole = async (account) => {
  await BloodDonationContract.methods
    .grantRedCrossRole(account)
    .send({
      from: window.klaytn.selectedAddress,
      gas: 350000,
    })
    .then(() =>
      toast.success(`성공적으로 헌혈의 집 권한을 주었습니다.`, {
        position: toast.POSITION.TOP_CENTER,
      })
    )
    .catch((error) =>
      toast.error("권한이 없습니다.", { position: toast.POSITION.TOP_CENTER })
    );
};

export const checkHospitalRole = async (account) => {
  await BloodDonationContract.methods
    .checkHospitalRole(account)
    .send({
      from: window.klaytn.selectedAddress,
      gas: 300000,
    })
    .then(() =>
      toast.success("병원 권한이 있습니다.", {
        position: toast.POSITION.TOP_CENTER,
      })
    )
    .catch((e) =>
      toast.error("병원 권한이 없습니다.", {
        position: toast.POSITION.TOP_CENTER,
      })
    );
};

export const checkRedCrossRole = async (account) => {
  await BloodDonationContract.methods
    .checkRedCrossRole(account)
    .send({
      from: window.klaytn.selectedAddress,
      gas: 300000,
    })
    .then(() =>
      toast.success("적십자 권한이 있습니다.", {
        position: toast.POSITION.TOP_CENTER,
      })
    )
    .catch((e) =>
      toast.error("적십자 권한이 없습니다.", {
        position: toast.POSITION.TOP_CENTER,
      })
    );
};

export const checkAdminRole = async (account) => {
  await BloodDonationContract.methods
    .checkAdminRole(account)
    .send({
      from: window.klaytn.selectedAddress,
      gas: 300000,
    })
    .then(() =>
      toast.success("관리자 권한이 있습니다.", {
        position: toast.POSITION.TOP_CENTER,
      })
    )
    .catch((e) =>
      toast.error("관리자 권한이 없습니다.", {
        position: toast.POSITION.TOP_CENTER,
      })
    );
};

export const revokeRedCrossRole = async (account) => {
  await BloodDonationContract.methods
    .revokeRedCrossRole(account)
    .send({
      from: window.klaytn.selectedAddress,
      gas: 350000,
    })
    .then(() =>
      toast.success(`${account}로부터 헌혈의 집 권한을 취소하였습니다. `, {
        position: toast.POSITION.TOP_CENTER,
      })
    )
    .catch((error) =>
      toast.error("권한이 없습니다.", { position: toast.POSITION.TOP_CENTER })
    );
};

export const revokeHospitalRole = async (account) => {
  await BloodDonationContract.methods
    .revokeHospitalRole(account)
    .send({
      from: window.klaytn.selectedAddress,
      gas: 350000,
    })
    .then(() =>
      toast.success(`${account}로부터 병원 권한을 취소하였습니다. `, {
        position: toast.POSITION.TOP_CENTER,
      })
    )
    .catch((error) =>
      toast.error("권한이 없습니다.", { position: toast.POSITION.TOP_CENTER })
    );
};
