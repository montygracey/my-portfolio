import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!value) {
      setErrors({ ...errors, [name]: 'This field is required' });
    } else if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      setErrors({ ...errors, [name]: 'Invalid email address' });
    } else {
      setErrors({ ...errors, [name]: '' });
    }
  };

  return (
    <section id="contact">
      <h2>Contact</h2>
      <form>
  <div className="form-group">
    <input
      type="text"
      name="name"
      placeholder="Name"
      value={formData.name}
      onChange={handleChange}
      onBlur={handleBlur}
    />
    {errors.name && <p className="error">{errors.name}</p>}
  </div>
  <div className="form-group">
    <input
      type="email"
      name="email"
      placeholder="Email"
      value={formData.email}
      onChange={handleChange}
      onBlur={handleBlur}
    />
    {errors.email && <p className="error">{errors.email}</p>}
  </div>
  <div className="form-group">
    <textarea
      name="message"
      placeholder="Message"
      value={formData.message}
      onChange={handleChange}
      onBlur={handleBlur}
    />
    {errors.message && <p className="error">{errors.message}</p>}
  </div>
  <button type="submit">Submit</button>
</form>
    </section>
  );
};

export default Contact;