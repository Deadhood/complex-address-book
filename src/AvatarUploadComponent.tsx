import * as React from 'react';
import { Upload, Icon, message } from 'antd';
import { UploadFile, UploadChangeParam } from 'antd/lib/upload/interface';

function getBase64(img: File, callback: (res: string) => void): void {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file: UploadFile): boolean {
  const isJPG = file.type === 'image/jpeg';
  if (!isJPG) {
    message.error('You can only upload JPG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJPG && isLt2M;
}

interface AvatarProps {
  onUpload: (imageBase64: string) => void;
}

interface AvatarState {
  loading: boolean;
  imageUrl: string | undefined;
}

class AvatarUpload extends React.Component<AvatarProps, AvatarState> {
  public state = {
    loading: false,
    imageUrl: void 0
  };

  public render() {
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const imageUrl = this.state.imageUrl;
    return (
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        beforeUpload={beforeUpload}
        onChange={this.handleChange}
      >
        {imageUrl ? <img src={imageUrl} alt="" /> : uploadButton}
      </Upload>
    );
  }

  private handleChange = (info: UploadChangeParam): void => {
    if (info.file.status === 'uploading') {
      return this.setState({ loading: true });
    }

    if (info.file.status === 'done') {
      if (!info.file.originFileObj) {
        return;
      }
      getBase64(info.file.originFileObj, (imageUrl: string): void => {
        this.setState({
          imageUrl,
          loading: false
        });
        this.props.onUpload(imageUrl);
      });
    }
  }
}

export { AvatarUpload };
