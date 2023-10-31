const crypto = require('crypto');
export function generateFileIdentifier(userId:number, creationDate:Date) {
    const dataToHash = userId.toString() + creationDate.toString();
  
    const sha256Hash = crypto.createHash('sha256');
    sha256Hash.update(dataToHash);
  
    return sha256Hash.digest('hex');
}