import React, {useState} from "react";
import Checkbox from "../../../common/components/checkbox/Checkbox";
import Avatar from "../../../assets/images/avatar.png";
import IconDelete from "../../../assets/images/icon-delete.png";
import IconEdit from "../../../assets/images/icon-edit.png";
import AddEditTeamMember from "./add-edit-team-member";
import DeleteTeamMember from "./delete-team-member";

const Team = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditTeamMember = () => {
    setIsOpen(!isOpen);
    setEdit(true);
  }

  const handleAddTeamMember = () => {
    setIsOpen(!isOpen);
    setEdit(false);
  }

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }
  return (
    <div className="container-team container-notifications">
      <button className="button button-team" onClick={handleAddTeamMember}>Add Team Member</button>
      <div className="division-settings section-switches">
        <div className="block-info">
          <h3>Admin users</h3>
          <span>
            Admins can add and remove users and manage organization-level
            settings.
          </span>
        </div>
        <div className="container-table">
          <table className="table table-team">
            <thead>
              <tr>
                <th>
                  <Checkbox />
                </th>
                <th>Name</th>
                <th>Date added</th>
                <th>Last active</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Checkbox />
                </td>
                <td>
                  <div className="avatar-info">
                    <img src={Avatar} alt="Avatar" />
                    <div>
                      Natali Craig (you) <span>natali@untitledui.com</span>
                    </div>
                  </div>
                </td>
                <td>Feb 22, 2022</td>
                <td>Feb 22, 2022</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="division-settings section-switches">
        <div className="block-info">
          <h3>Trip support team</h3>
        </div>
        <div className="container-table">
          <table className="table table-team table-team-support">
            <thead>
              <tr>
                <th>
                  <Checkbox />
                </th>
                <th>Name</th>
                <th>Date added</th>
                <th>Last active</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Checkbox />
                </td>
                <td>
                  <div className="avatar-info">
                    <img src={Avatar} alt="Avatar" />
                    <div>
                      Natali Craig <span>natali@untitledui.com</span>
                    </div>
                  </div>
                </td>
                <td>Feb 22, 2022</td>
                <td>Feb 22, 2022</td>
                <td>
                  <button className="button-link" onClick={toggleModal}>
                    <img src={IconDelete} alt="Icon Delete" />
                  </button>
                </td>
                <td>
                  <button className="button-link" onClick={handleEditTeamMember}>
                    <img src={IconEdit} alt="Icon Edit" />
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <Checkbox />
                </td>
                <td>
                  <div className="avatar-info">
                    <img src={Avatar} alt="Avatar" />
                    <div>
                      Natali Craig <span>natali@untitledui.com</span>
                    </div>
                  </div>
                </td>
                <td>Feb 22, 2022</td>
                <td>Feb 22, 2022</td>
                <td>
                  <button className="button-link">
                    <img src={IconDelete} alt="Icon Delete" />
                  </button>
                </td>
                <td>
                  <button className="button-link">
                    <img src={IconEdit} alt="Icon Edit" />
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <Checkbox />
                </td>
                <td>
                  <div className="avatar-info">
                    <img src={Avatar} alt="Avatar" />
                    <div>
                      Natali Craig <span>natali@untitledui.com</span>
                    </div>
                  </div>
                </td>
                <td>Feb 22, 2022</td>
                <td>Feb 22, 2022</td>
                <td>
                  <button className="button-link">
                    <img src={IconDelete} alt="Icon Delete" />
                  </button>
                </td>
                <td>
                  <button className="button-link">
                    <img src={IconEdit} alt="Icon Edit" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <AddEditTeamMember isOpen={isOpen} setIsOpen={setIsOpen} edit={edit} />
      <DeleteTeamMember isOpen={isModalOpen} toggle={toggleModal} />
    </div>
  );
};

export default Team;
