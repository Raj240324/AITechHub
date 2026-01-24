import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/ui/Hero';
import { events, pastEvents, eventTypes } from '../data/events';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, ArrowRight, Play, Gift, Star, CheckCircle2 } from 'lucide-react';
import { useModal } from '../context/ModalContext';

const Events = () => {
  const { openModal } = useModal();
  const [activeType, setActiveType] = useState('All');

  const filteredEvents = events.filter(event => 
    activeType === 'All' || event.type === activeType
  );

  const getEventTypeLabel = (type) => {
    const labels = {
      webinar: 'Webinar',
      workshop: 'Workshop',
      seminar: 'Seminar',
      hackathon: 'Hackathon'
    };
    return labels[type] || type;
  };

  const getEventTypeColor = (type) => {
    const colors = {
      webinar: 'bg-blue-500',
      workshop: 'bg-purple-500',
      seminar: 'bg-green-500',
      hackathon: 'bg-orange-500'
    };
    return colors[type] || 'bg-primary';
  };

  return (
    <Layout
      title="Events & Workshops | Raj Software Training Institute"
      description="Join our free webinars, workshops, hackathons, and tech events. Learn from industry experts and grow your network."
    >
      <Hero
        badge={
          <div className="flex items-center space-x-2">
            <Calendar className="h-3 w-3" />
            <span>Upcoming Events</span>
          </div>
        }
        title={<>Learn & Grow at Our <span className="text-primary">Events</span></>}
        subtitle="Join our free webinars, hands-on workshops, and exciting hackathons. Network with industry experts and fellow learners."
      />

      {/* Event Type Filter */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {eventTypes.map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all capitalize ${
                  activeType === type
                    ? 'bg-primary text-white shadow-lg shadow-primary/20'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {type === 'All' ? 'All Events' : getEventTypeLabel(type)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-slate-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              Upcoming <span className="text-primary">Events</span>
            </h2>
            <p className="text-slate-600">
              Don't miss out on these exciting learning opportunities
            </p>
          </div>

          {filteredEvents.length === 0 ? (
            <div className="text-center py-20">
              <div className="bg-slate-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-10 w-10 text-slate-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">No events found</h3>
              <p className="text-slate-500">Check back soon for upcoming events!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all group"
                >
                  {/* Image */}
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className={`text-[10px] font-black text-white px-3 py-1.5 rounded-full uppercase tracking-wider ${getEventTypeColor(event.type)}`}>
                        {getEventTypeLabel(event.type)}
                      </span>
                      {event.isFree && (
                        <span className="text-[10px] font-black text-green-700 bg-green-100 px-3 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-1">
                          <Gift className="h-3 w-3" /> Free
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-xl font-black text-slate-900 mb-4 group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>

                    {/* Meta */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Calendar className="h-4 w-4 text-primary" />
                        {new Date(event.date).toLocaleDateString('en-IN', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric'
                        })}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Clock className="h-4 w-4 text-primary" />
                        {event.duration}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <MapPin className="h-4 w-4 text-primary" />
                        {event.mode}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Users className="h-4 w-4 text-primary" />
                        {event.seatsLeft} seats left
                      </div>
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {event.description}
                    </p>

                    {/* Topics */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {event.topics.slice(0, 3).map((topic, i) => (
                        <span key={i} className="text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-full flex items-center gap-1">
                          <CheckCircle2 className="h-3 w-3 text-primary" />
                          {topic}
                        </span>
                      ))}
                    </div>

                    {/* Speaker & CTA */}
                    <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                      <div className="flex items-center gap-3">
                        <img
                          src={event.speaker.avatar}
                          alt={event.speaker.name}
                          className="w-10 h-10 rounded-full border-2 border-primary/20"
                        />
                        <div>
                          <p className="text-sm font-bold text-slate-900">{event.speaker.name}</p>
                          <p className="text-xs text-slate-400">{event.speaker.role}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => openModal(event.title)}
                        className="bg-primary text-white font-bold px-6 py-3 rounded-xl hover:bg-primary-dark transition-all flex items-center gap-2"
                      >
                        Register <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">
              Past <span className="text-primary">Events</span>
            </h2>
            <p className="text-slate-600">
              A glimpse of our previous successful events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-50 rounded-[2rem] overflow-hidden group"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-slate-900">{event.title}</h3>
                    <span className="text-sm text-slate-500">
                      {new Date(event.date).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="text-sm text-slate-600 font-medium">{event.attendees}+ Attendees</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {event.highlights.map((highlight, i) => (
                      <span key={i} className="text-xs font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-full">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-primary to-blue-700 rounded-[3rem] p-10 md:p-16 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-10 left-10 w-40 h-40 rounded-full border-8 border-white" />
              <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full border-8 border-white" />
            </div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <Star className="h-12 w-12 mx-auto mb-6 text-white/50" />
              <h2 className="text-3xl md:text-4xl font-black mb-6">
                Want to Host an Event with Us?
              </h2>
              <p className="text-lg text-white/80 mb-10">
                Are you an industry expert wanting to share your knowledge? Partner with us to reach thousands of aspiring tech professionals.
              </p>
              <button 
                onClick={() => openModal('Event Partnership')}
                className="bg-white text-primary font-bold px-10 py-4 rounded-2xl hover:bg-slate-100 transition-all shadow-xl"
              >
                Become a Speaker
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
