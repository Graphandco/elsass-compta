export const EmailTemplate = ({
   name,
   email,
   phone,
   society,
   clientType,
   message,
   privacy,
}) => (
   <div>
      <h2>Vous avez reçu un message de {name}</h2>
      <p>
         <strong>Email :</strong> {email}
      </p>
      <p>
         <strong>Téléphone :</strong> {phone}
      </p>
      <p>
         <strong>Type de client :</strong>{" "}
         {clientType === "particulier" ? "Particulier" : "Professionnel"}
      </p>
      {society && (
         <p>
            <strong>Société :</strong> {society}
         </p>
      )}
      <p>
         <strong>Message :</strong>
      </p>
      <p>{message}</p>
      <p>
         <strong>Politique de confidentialité :</strong>{" "}
         {privacy ? "Acceptée" : "Non acceptée"}
      </p>
   </div>
);
